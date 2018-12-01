import { connect } from 'react-redux'
import { fetchData, selectShop } from './module/home'
import HomeContainer from './container'


function mapStateToProps(state) {
  return {
    shops: state && state.home && state.home.shops || [],
    selectedShopIndex: state && state.home && state.home.selectedShopIndex
  }
}

const mapDispatchToProps = {
    fetchData,
    selectShop
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

