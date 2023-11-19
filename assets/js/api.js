var hotelbaseUrl = "http://localhost:8086/travelPlanning/hotel";
var vehiclebaseUrl = "http://localhost:8084/travelPlanning/vehicle";

loadAllHotel();
loadAllVehicle();

function loadAllHotel() {
  $.ajax({
    url: hotelbaseUrl,
    processData: false,
    contentType: false,
    cache: false,
    method: "GET",
    success: function (res) {
      for (const hotel of res.data) {
        let hotelCard = `

        <div class="row justify-content-center mb-3">
                      <div class="col-md-12 col-xl-10 ">
                        <div class="card shadow-lg border rounded-3 ">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                <div class="bg-image hover-zoom ripple rounded ripple-surface">
                                  <img src="data:guideImg/png;base64,${hotel.hotelImg}"
                                    class="w-100" />
                                  <a href="#!">
                                    <div class="hover-overlay">
                                      <div class="mask" style="background-color: rgba(253, 253, 253, 0.15);"></div>
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-6 col-lg-6 col-xl-6">
                                <h5 id="hotelName">${hotel.hotelName}</h5>
                                <div class="d-flex flex-row">
                                  <div class="text-danger mb-1 me-2">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                  </div>
                                  
                                </div>

                                <div class="container text-start small">
                                  <div class="row">
                                    <div class="col-6  p-0">
                                      <span class="text-primary"> • </span>
                                      <span >Location :</span>
                                      <span >${hotel.location}</span>
                                    </div>

                                    <div class="col-6 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Category :</span>
                                      <span >${hotel.category}</span>
                                    </div>

                                    <div class="col-7 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Email :</span>
                                      <span >${hotel.email}</span>
                                    </div>

                                    <div class="col-7 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Contact :</span>
                                      <span >${hotel.phone}</span>
                                    </div>

                                    <div class="col-6 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Pet Allowed or Not :</span>
                                      <span >${hotel.is_pet_allowed}</span>
                                    </div>

                                    <div class="col-6 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Cancellation Criteria :</span>
                                      <span >${hotel.cancellation}</span>
                                    </div>
                                
                                    
                                  </div>
                                </div>
                                
                              
                               
                              </div>
                              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                <div class="d-flex flex-row align-items-center mb-1">
                                  <h4 class="mb-1 me-1">Rs </h4>
                                  <h4 class="mb-1 me-1">${hotel.hotel_fee}</h4>
                                  
                                </div>
                                
                                <div class="d-flex flex-column mt-4">
                                  
                                  <button class="btn btn-outline-primary btn-sm mt-2 " type="button" >
                                    Select Hotel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  
        
        
        `;

        $(".hotelCard").append(hotelCard);
      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
}

// Vehicle Card Load -----------------------------------------

function loadAllVehicle() {
  $.ajax({
    url: vehiclebaseUrl,
    processData: false,
    contentType: false,
    cache: false,
    method: "GET",
    success: function (res) {
      for (const vehicle of res.data) {
        let vehicleProduct = `

        <div class="row justify-content-center mb-3">
                      <div class="col-md-12 col-xl-10 ">
                        <div class="card shadow-lg border rounded-3 ">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                              
                              
                                <!-- Start img -->

                                <div id="carouselExampleIndicators" class="carousel slide">
                                  <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                                  </div>
                                  <div class="carousel-inner">
                                    <div class="carousel-item active">
                                      <img src="data:guideImg/png;base64,${vehicle.side_img}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="data:guideImg/png;base64,${vehicle.front_img}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="data:guideImg/png;base64,${vehicle.back_img}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="data:guideImg/png;base64,${vehicle.front_interior}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="data:guideImg/png;base64,${vehicle.back_interior}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="data:guideImg/png;base64,${vehicle.license_f_img}" class="d-block w-100" alt="...">
                                    </div>
                                    <div class="carousel-item">
                                      <img src="data:guideImg/png;base64,${vehicle.license_b_img}" class="d-block w-100" alt="...">
                                    </div>
                                  </div>
                                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                  </button>
                                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                  </button>
                                </div>

                                <!-- end -->


                              
                              </div>
                              <div class="col-md-6 col-lg-6 col-xl-6">
                                <h5>Vehicle Details</h5>
                                

                                <div class="container text-start small">
                                  <div class="row">
                                    <div class="col-4  p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Brand :</span>
                                      <span >${vehicle.brand}</span>
                                    </div>

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Category :</span>
                                      <span >${vehicle.category}</span>
                                    </div>

                                    <div class="col-3 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Type :</span>
                                      <span >${vehicle.vehicleType}</span>
                                    </div>

                                    <div class="col-3 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Fuel :</span>
                                      <span >${vehicle.fuelType}</span>
                                    </div>

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Hybrid or No :</span>
                                      <span >${vehicle.is_hybrid}</span>
                                    </div>

                                    <div class="col-4 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >No of Seat :</span>
                                      <span >${vehicle.no_of_seat}</span>
                                    </div>

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Auto or Manual :</span>
                                      <span >${vehicle.is_auto}</span>
                                    </div>

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Fuel Usage (KM/L) :</span>
                                      <span >${vehicle.fuel_usage}</span>
                                    </div>

                                    

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Fee for Day (LKR) :</span>
                                      <span >${vehicle.fee_for_day}</span>
                                    </div>

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Fee for 1km (LKR) :</span>
                                      <span >${vehicle.fee_for_1km}</span>
                                    </div>

                                    <div class="col-12 p-0 ">
                                      <h5>Driver Details</h5>
                                    </div>

                                    <div class="col-5 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Driver Name :</span>
                                      <span >${vehicle.driver_name}</span>
                                    </div>

                                    <div class="col-7 p-0 ">
                                      <span class="text-primary"> • </span>
                                      <span >Driver Contact :</span>
                                      <span >${vehicle.drivel_contact}</span>
                                    </div>

                                    
                                
                                    
                                  </div>
                                </div>
                                
                              
                               
                              </div>
                              <div class="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                <div class="d-flex flex-row align-items-center mb-1">
                                  
                                  <select class="form-select" aria-label="Default select example">
                                    <option selected>Select Fee</option>
                                    <option value="1">${vehicle.fee_for_day}</option>
                                    <option value="2">${vehicle.fee_for_1km}</option>
                                   
                                  </select>
                                  
                                </div>
                                
                                <div class="d-flex flex-column mt-4">
                                  
                                  <button class="btn btn-outline-primary btn-sm mt-2" type="button">
                                    Select Hotel
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
        
        `;

        $(".vehicleCard").append(vehicleProduct);
      }
    },
    error: function (ob) {
      alert(ob.responseJSON.message);
    },
  });
}
