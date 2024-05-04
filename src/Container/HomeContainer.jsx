import React from 'react'
import {connect} from 'react-redux'
import Home from '../Component/Home'
import {addCart} from "../Services/Action/Action"

const mapStateToProps =state =>({
    cardDara:state.data

})

const mapDispatchToProps = dispatch=>({
    addToCartHandler:data=>dispatch(addCart(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home