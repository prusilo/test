using BussinesLogic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApplication4.Controllers
{
    public class AccessController : ApiController
    {

        // POST api/<controller>
        [HttpPost]
        public bool Post([FromBody]User user)
        {
            return true;
        }


    }
}