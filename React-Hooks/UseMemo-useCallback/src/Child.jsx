// // 1.====>  Normal use case where child rendered every time whenever any state changed in parent component
// import React from 'react'

// function Child() {
//     console.log('child comp rendered')
//   return (
//     <div>Child</div>
//   )
// }

// export default Child




//// 1.====>To Prevent normal use case we use React.memo()
//// now cause there is no props so child component should not be render multiple time whenever parent component state changed.
// import React,{memo} from 'react'

// function Child() {
//     console.log('child comp rendered')
//   return (
//     <div>Child</div>
//   )
// }

// export default memo(Child)



////1.====>In this case we pass count from parent , it changes every time button is clicked
////So now because props value is changing so child component need to be rerender but if any other state ill change in parent then child component will not re render
import React,{memo} from 'react'

function Child({count,memoizedOtpFunc,memoizedOtp}) {
    console.log('child comp rendered')
  return (
    <>
    <div>Child {count}</div>
    <div>memoizedOtpFunc : {memoizedOtpFunc()}</div>
    <div>memoizedOtpValue : {memoizedOtp}</div>
    </>
  )
}

export default memo(Child)