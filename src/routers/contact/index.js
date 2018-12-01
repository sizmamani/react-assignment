import { connect } from 'react-redux'
import { fetchData } from '../home/module/home'
import ContactContainer from './container'


function mapStateToProps(state) {
  return {
    shops: state && state.home && state.home.shops || [],
  }
}

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactContainer)

