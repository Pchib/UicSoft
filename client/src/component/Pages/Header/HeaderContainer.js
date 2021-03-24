import Header from './Header'
import { connect } from 'react-redux'
import { TOGGLE } from '../../../redux/action/headerLoginmodalAction'

const mapDispatchToProps = {
  TOGGLE
}


const mapStoreToProps = state => ({

})
console.log(mapStoreToProps)


export default connect(mapStoreToProps, mapDispatchToProps)(Header)