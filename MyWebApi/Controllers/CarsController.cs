using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Description;
using MyWebApi.Models;

namespace MyWebApi.Controllers
{
    public class CarsController : ApiController
    {
        private MyDatabaseEntities db = new MyDatabaseEntities();

        // GET api/Cars
        public IQueryable<Car> GetCars()
        {
            return db.Cars;
        }

        // GET api/Cars/5
        public IHttpActionResult GetCar(int id)
        {
            Car car = db.Cars.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            return Ok(car);
        }

        // GET api/Cars/
        public IHttpActionResult Get(string filter)
        {
            List<Car> cars = db.Cars.Where(carItem => carItem.Name.Contains(filter)).ToList();

            if (cars == null)
            {
                return NotFound();
            }
        
            return Ok(cars);
        }

        // PUT api/Cars/5
        public IHttpActionResult PutCar(int id, Car car)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != car.Id)
            {
                return BadRequest();
            }

            db.Entry(car).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/Cars
        [ResponseType(typeof(Car))]
        public IHttpActionResult PostCar()
        {
            var request = HttpContext.Current.Request;

            Car car = new Car();

            car.Available = request.Form["available"] == "true";
            car.Photo = request.Form["photo"];
            car.Name = request.Form["name"];
            car.Description = request.Form["description"];
            car.Features = request.Form["features"];
            car.Year = Int32.Parse(request.Form["year"]); 
            car.Range = Int32.Parse(request.Form["range"]);
            car.Color = request.Form["color"];

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Cars.Add(car);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = car.Id }, car);
        }

        // DELETE api/Cars/5
        [ResponseType(typeof(Car))]
        public IHttpActionResult DeleteCar(int id)
        {
            Car car = db.Cars.Find(id);
            if (car == null)
            {
                return NotFound();
            }

            db.Cars.Remove(car);
            db.SaveChanges();

            return Ok(car);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarExists(int id)
        {
            return db.Cars.Count(e => e.Id == id) > 0;
        }
    }
}