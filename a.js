let n
初始化()
times = setInterval(()=>{                
    makeLeave(getImages(n))           //从视口离开
    .one('transitionend',(e)=>{
        makeEnter($(e.currentTarget)) //跑到最后面
    })
    makeCurrent(getImages(n + 1))     //跑进视口
    n+=1
},1500)


// 鼠标进入暂停，出来恢复
$('.window').on('mouseenter',()=>{
    clearInterval(times)
})
$('.window').on('mouseleave', () => {
    times = setInterval(() => {
        makeLeave(getImages(n))           
            .one('transitionend', (e) => {
                makeEnter($(e.currentTarget)) 
            })
        makeCurrent(getImages(n + 1))     
        n += 1
    }, 1500)
})


// 下面不用看哦
function x(n) {
    if (n > 4) {
        n = n % 4
        if (n === 0) {
            n = 4
        }
    }
    return n
}
function 初始化() {
    n = 1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')                      //给除了他的兄弟添加enter
}
function getImages(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}

function makeEnter($node) {
    return $node.removeClass('leave current').addClass('enter')
}
function makeCurrent($node) {
    return $node.removeClass('leave enter').addClass('current')
}
function makeLeave($node) {
    return $node.removeClass('current enter').addClass('leave')
}


// 初始化前
// $('.images > img:nth-child(1)').addClass('current')
// $('.images > img:nth-child(2)').addClass('enter')
// $('.images > img:nth-child(3)').addClass('enter')
// $('.images > img:nth-child(4)').addClass('enter')

// let n = 1

// setInterval(() => {
//     $(`.images > img:nth-child(${x(n)}`).removeClass('current').addClass('leave')
//         .one('transitionend', (e) => {
//             $(e.currentTarget).removeClass('leave').addClass('enter')
//         })
//     $(`.images>img:nth-child(${x(n + 1)}`).removeClass('enter').addClass('current')
//     n += 1
// }, 1500)


// function x(n) {
//     if (n > 4) {
//         n = n % 4
//         if (n === 0) {
//             n = 4
//         }
//     }
//     return n
// }