document.addEventListener('DOMContentLoaded',()=>{
    loader = document.querySelector('.loader-page')
    loader.style.opacity = '0'
})







firstjnt = document.querySelector(".firstjnt")
arm1 = document.querySelector(".arm1")
secondjnt = document.querySelector(".secondjnt")
arm2 = document.querySelector(".arm2")
thirdjnt = document.querySelector(".thirdjnt")
all_length = firstjnt.offsetWidth/2 + arm1.offsetWidth + secondjnt.offsetWidth + arm2.offsetWidth + thirdjnt.offsetWidth/2
single_arm_length = arm1.offsetWidth + firstjnt.offsetWidth
firstjnt.style.transform = `translate(-50%, -50%) rotate(70deg)`
secondjnt.style.transform = `rotate(${-(180-90)}deg)`




window.addEventListener('mousemove', (event)=>{
    x = (event.clientX)
    y = (event.clientY)
    movearm(x,y)
})
window.addEventListener('touchstart', (event)=>{
    const touch = event.touches[0]
    x = touch.clientX
    y = touch.clientY
    movearm(x,y)
})
window.addEventListener('touchmove',(event)=>{
    const touch = event.touches[0]
    x = touch.clientX
    y = touch.clientY
    movearm(x,y)
})
function movearm(x, y){
    slope = y/x
    angleRad = Math.atan(slope)
    angle = angleRad * (180/ Math.PI)
    distance = Math.sqrt(x**2 + y**2)
   
    if(distance<all_length){
        area = (distance/4)*Math.sqrt((4*(single_arm_length**2)) - distance**2)
        if(!isNaN(area)){


            //// sin from me


            // sin_theta = (area*2)/(single_arm_length**2)
            // middle_angle_rad = Math.asin(sin_theta)
            // middle_angle = middle_angle_rad * (180/Math.PI)
            // rest_angle = (180-middle_angle)/2
            // console.log(`distance: ${distance}`)
            // console.log(`two arm length: ${single_arm_length*2}`)
            // console.log(`middle angle: ${middle_angle}`)
            
            
            
            //// cosine from web
            cos_theta = (single_arm_length**2 + single_arm_length**2 - distance**2) / (2*(single_arm_length**2))
            theta_rad = Math.acos(cos_theta)
            theta = theta_rad*(180/Math.PI)
            rest_theta = (180-theta)/2




            // firstjnt.style.transform = `translate(-50%, -50%) rotate(${angle+rest_theta}deg)`
            // secondjnt.style.transform = `rotate(${-(180-theta)}deg)`
            gsap.to(firstjnt, {
                rotation: angle + rest_theta,
                duration: 0.07
            })
            gsap.to(secondjnt, {
                rotation: -180 + theta,
                duration: 0.07
            })
            

        }
    }
    else{
        // firstjnt.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
        // secondjnt.style.transform = `rotate(${(0)}deg)`
        gsap.to(firstjnt, {
            rotation: angle,
            duration: 0.07
        })
        gsap.to(secondjnt, {
            rotation: 0.07
        })
        
    }
}