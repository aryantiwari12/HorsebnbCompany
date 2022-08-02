import React from 'react'
import "../Home/home.css"
import IMAGE from "../../IMG/search_grey.png"
import { useState } from 'react'
const Home = () => {

    const [counter, setCounter] = useState(0)

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

    const tabs=document.querySelectorAll(".tabs li");
    const contents=document.querySelectorAll(".home-content")

    tabs.forEach((tab)=>{
        tab.addEventListener("click",()=>{
            tabs.forEach((tab)=>tab.classList.remove("active"))
            tab.classList.add("active");
        });
    });
    
    

    return (
        <div>
            <div className='container  mt-5 '>
                <section>
                    <ul className='tabs d-flex gap-5 '>
                        <li className='' onClick={shortTerm}>Short Term stells</li>
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
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add stalls </span>
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> : ''}
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
                                    <div className='form-group mb-0 text-start'>
                                        <label for="where">SELECT MONTH</label>
                                        <input type="text" placeholder='Add date' class="form-control pl-0" />

                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
                                    <div className='form-group mb-0'>
                                        <label for="where">NUMBER OF STALLS</label>
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add stalls </span>
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div> : ''}

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
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add room </span>
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
                    {HorseAdventures == true ?
                        <div className='home-content shadow'>
                            <div className='row p-5'>
                                <div className='col-lg-4 mb-4 mb-lg-0'>
                                    <div className='form-group mb-0 text-start '>
                                        <label for="where">WHERE</label>
                                        <input placeholder="Anywhere" class="form-control lens-bg pac-target-input" autocomplete="off" />
                                    </div>
                                </div>
                                <div className='col-lg-4 d-flex justify-content-between align-items-center'>
                                    <div className='form-group mb-0'>
                                        <label for="where">NUMBER OF ROOMS</label>
                                        <span class="form-control bg-white pl-0" style={{ color: "gray" }} data-bs-toggle="modal" data-bs-target="#staticBackdrop">  Add room </span>
                                    </div>
                                    <div className=''>
                                        <button className='btn btn-primary'>
                                            <i class="fa-solid fa-magnifying-glass"></i> Search
                                        </button>
                                    </div>
                                </div>
                             </div>
                        </div> : ""}



                </section>
            </div >
        </div >
    )
}

export default Home