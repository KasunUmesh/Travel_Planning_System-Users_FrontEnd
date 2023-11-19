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

function loadAllVehicle() {}
