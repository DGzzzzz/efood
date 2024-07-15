import HeaderProfile from '../../components/HeaderProfile'
import ProductList from '../../containers/ProductList'
import { useParams } from 'react-router-dom'
import BannerProfile from '../../components/BannerProfile'

import { useGetProductsQuery } from '../../Services/api'
import Loader from '../../components/Loaders'

type ProductsPrams = {
  id: string
}
const Profile = () => {
  const { id } = useParams() as ProductsPrams

  const { data: productList } = useGetProductsQuery(id)

  if (!productList) {
    return <Loader />
  }
  return (
    <>
      <HeaderProfile />
      <BannerProfile />
      <div className="container">
        <ProductList itens={productList?.cardapio} />
      </div>
    </>
  )
}

export default Profile
