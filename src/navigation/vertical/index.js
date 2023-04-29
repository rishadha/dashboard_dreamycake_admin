// ** Icon imports
import Login from 'mdi-material-ui/Login'
import OrderBoolAscending from 'mdi-material-ui/OrderBoolAscending'
import TruckDelivery from 'mdi-material-ui/TruckDelivery'
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCircle from 'mdi-material-ui/AccountCircle'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import BookOpenOutline from 'mdi-material-ui/BookOpenOutline'
import PackageVariant from 'mdi-material-ui/PackageVariant'

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Analysis',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
  
    {
      title: 'User',
      icon: AccountCircle,
      path: '/user'
    },
    {
      title: 'Course',
      icon: BookOpenOutline,
      path: '/pages/course',
      openInNewTab: true
    },
    {
      title: 'payment',
      path: '/payment',
      icon: CreditCardOutline
    },
    {
      title: 'product',
      icon: PackageVariant,
      path: '/products'
    },
    {
      title: 'Order',
      icon: OrderBoolAscending,
      path: '/order'
    },
    {
      icon: TruckDelivery,
      title: 'Delivery',
      path: '/delivery'
    }
  ]
}

export default navigation
