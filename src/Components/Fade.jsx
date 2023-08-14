import React from 'react'

export default function Fade() {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          console.log(entry)
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show")
          }
        })
      })
    
      const hiddenElements = document.querySelectorAll(".hide");
      hiddenElements.forEach((el) => observer.observe(el))

  return (
    <div className="text-white text-3xl text-center">
        <h1 className="hide">Booooooooo</h1>
        <h1 className="my-24">Space 2</h1>
    </div>
  )
}
