import React from 'react'
import "../Home/home.css"
import IMAGE from "../../IMG/search_grey.png"
import { useState } from 'react'
const Home = () => {

    const [counter, setCounter] = useState(0)
<<<<<<< HEAD
=======
    const [monthly, setmonthly] = useState(0)
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3

    const [ShortTermStalls, setShortTermStalls] = useState(true)
    const [MonthlyBoard, setMonthlyBoard] = useState(false)
    const [GuestAccommodations, setGuestAccommodations] = useState(false)
    const [HorseAdventures, setHorseAdventures] = useState(false)

    const minus = () => {
        setCounter(counter - 1)
    }
    const plus = () => {
        setCounter(counter + 1)
    }
<<<<<<< HEAD
=======
    const minus1 = () => {
        setmonthly(monthly - 1)
    }
    const plus1 = () => {
        setmonthly(monthly + 1)
    }
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
    const shortTerm = () => {

        setShortTermStalls(true)
        setMonthlyBoard(false)
        setGuestAccommodations(false)
        setHorseAdventures(false)

    }
    const MonthlyBoardd = () => {
        setMonthlyBoard(true)
        setShortTermStalls(false)
        setGuestAccommodations(false)
        setHorseAdventures(false)
    }
    const guest = () => {
        setGuestAccommodations(true)
        setShortTermStalls(false)
        setMonthlyBoard(false)
        setHorseAdventures(false)
    }
    const Horse = () => {
        setHorseAdventures(true)
        setShortTermStalls(false)
        setGuestAccommodations(false)
        setMonthlyBoard(false)
    }

<<<<<<< HEAD
    const tabs=document.querySelectorAll(".tabs li");
    const contents=document.querySelectorAll(".home-content")

    tabs.forEach((tab)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach((tab)=>tab.classList.remove("active"))
            tab.classList.add("active");
        });
    });
    
    
=======
    const tabs = document.querySelectorAll(".tabs li");
    const contents = document.querySelectorAll(".home-content")

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((tab) => tab.classList.remove("active"))
            tab.classList.add("active");
            contents[index].classList.add("active")

        });

    });


>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3

    return (
        <div>
            <div className='container  mt-5 '>
                <section>
                    <ul className='tabs d-flex gap-5 '>
<<<<<<< HEAD
                        <li className='' onClick={shortTerm}>Short Term stells</li>
=======
                        <li className='active' onClick={shortTerm}>Short Term stells</li>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                        <li onClick={MonthlyBoardd}>Monthly Board</li>
                        <li onClick={guest}>Guest Accommodations</li>
                        <li onClick={Horse}>Horse Adventures</li>
                    </ul>


                    {ShortTermStalls ?
                        <div className='home-content shadow active'>
                            <div className='row p-5'>
                                <div className='col-lg-4 mb-4 mb-lg-0'>
                                    <div className='form-group mb-0 text-start '>
                                        <label for="where">WHERE</label>
                                        <input placeholder="Anywhere" class="form-control lens-bg pac-target-input" autocomplete="off" />
                                    </div>

                                </div>
                                <div className='col-lg-4 mb-4 mb-lg-0 border-right border-left px-3'>
                                    <div className='form-group mb-0 text-start'>
                                        <label for="where">CHECK-IN/CHECK-OUT</label>
                                        <input type="date" placeholder='Add date' class="form-control pl-0" />

                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
                                    <div className='form-group mb-0'>
                                        <label for="where">NUMBER OF STALLS</label>
<<<<<<< HEAD
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add stalls </span>
=======
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#exampleModal2">  Add stalls </span>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>
<<<<<<< HEAD
                            </div>
                        </div> : ''}
=======

                                {/* number of stall modal */}
                                <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Add stalls</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body text-start">
                                                stalls
                                                <i class="fa-solid fa-minus text-primary mt-2" role="button" onClick={minus}></i>
                                                <p className='zero' >{counter}</p>
                                                <i class="fa-solid fa-plus text-primary mt-2" role="button" onClick={plus}></i>
                                            </div>
                                            <div class="modal-footer">
                                                <p type="button" class="text-start text-primary" data-bs-dismiss="modal"><i class="fa-solid fa-angle-left"></i> Cancel</p>
                                                <button type="button" class="btn btn-primary">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> : ''}
                    {/* MonthlyBoard */}
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                    {MonthlyBoard == true ?
                        <div className='home-content shadow'>
                            <div className='row p-5'>
                                <div className='col-lg-4 mb-4 mb-lg-0'>
                                    <div className='form-group mb-0 text-start '>
                                        <label for="where">WHERE</label>
                                        <input placeholder="Anywhere" class="form-control lens-bg pac-target-input" autocomplete="off" />
                                    </div>

                                </div>
                                <div className='col-lg-4 mb-4 mb-lg-0 border-right border-left px-3'>
<<<<<<< HEAD
                                    <div className='form-group mb-0 text-start'>
=======
                                    <div className='form-group mb-0 text-start '>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                                        <label for="where">SELECT MONTH</label>
                                        <input type="text" placeholder='Add date' class="form-control pl-0" />

                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
<<<<<<< HEAD
                                    <div className='form-group mb-0'>
                                        <label for="where">NUMBER OF STALLS</label>
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add stalls </span>
=======
                                    <div className='form-group mb-0 '>
                                        <label for="where">NUMBER OF STALLS</label>
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#exampleModal3">  Add stalls </span>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div> : ''}

<<<<<<< HEAD
=======
                    {/* MonthlyBoard modal */}

                    <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add stalls</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    stalls
                                    <i class="fa-solid fa-minus text-primary mt-2" role="button" onClick={minus1}></i>
                                    <p className='zero' >{monthly}</p>
                                    <i class="fa-solid fa-plus text-primary mt-2" role="button" onClick={plus1}></i>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                    {GuestAccommodations == true ?
                        <div className='home-content shadow'>
                            <div className='row p-5'>
                                <div className='col-lg-4 mb-4 mb-lg-0'>
                                    <div className='form-group mb-0 text-start '>
                                        <label for="where">WHERE</label>
                                        <input placeholder="Anywhere" class="form-control lens-bg pac-target-input" autocomplete="off" />
                                    </div>
                                </div>
                                <div className='col-lg-4 mb-4 mb-lg-0 border-right border-left px-3'>
                                    <div className='form-group mb-0 text-start'>
                                        <label for="where">CHECK-IN/CHECK-OUT</label>
                                        <input type="date" placeholder='Add date' class="form-control pl-0" />

                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
                                    <div className='form-group mb-0'>
                                        <label for="where">NUMBER OF ROOMS</label>
<<<<<<< HEAD
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add room </span>
=======
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#exampleModal4">  Add room </span>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : ''}
<<<<<<< HEAD
=======
                    <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                    {HorseAdventures == true ?
                        <div className='home-content shadow'>
                            <div className='row p-5'>
                                <div className='col-lg-4 mb-4 mb-lg-0'>
                                    <div className='form-group mb-0 text-start '>
                                        <label for="where">WHERE</label>
                                        <input placeholder="Anywhere" class="form-control lens-bg pac-target-input" autocomplete="off" />
                                    </div>
                                </div>
<<<<<<< HEAD
                                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
                                    <div className='form-group mb-0'>
                                        <label for="where">NUMBER OF ROOMS</label>
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add room </span>
                                    </div>
                                    <div className=''>
=======
                                <div className='col-lg-8 d-flex justify-content-between align-items-center '>
                                    <div className='form-group mb-0 text-start'>
                                        <label for="where">Date</label>
                                        <input type="date" placeholder='Add date' class="form-control pl-0" />
                                    </div>
                                    <div className='bttttt'>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>
<<<<<<< HEAD
                             </div>
=======
                            </div>
>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
                        </div> : ""}



                </section>
<<<<<<< HEAD
=======

>>>>>>> 7067d31e60b0f4cfefff54a8fcc5a84fcc878bc3
            </div >
        </div >
    )
}

export default Home