import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import CustomergradeDetail from 'views/customer/customergrade/CustomergradeDetail';
import BrandDetail from 'views/product/brandlist/BrandDetail';
import AppraisallistDetail from 'views/appraisal/AppraisallistDetail';
import ProductlistDetail from 'views/product/productlist/ProductlistDetail';
import AuctionlistDetail from 'views/auction/auctionlist/AuctionlistDetail';
import OrderlistDetail from 'views/order/OrderlistDetail';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

const Customerlist = Loadable(lazy(() => import('views/customer/customerlist/Customerlist')));
const CustomerDetail = Loadable(lazy(() => import('views/customer/customerlist/CustomerDetail')));

const Customergrade = Loadable(lazy(() => import('views/customer/customergrade/Customergrade')));

const Productlist = Loadable(lazy(() => import('views/product/productlist/Productlist')));
const Categorylist = Loadable(lazy(() => import('views/product/categorylist/Categorylist')));
const Brandlist = Loadable(lazy(() => import('views/product/brandlist/Brandlist')));

const Appraisallist = Loadable(lazy(() => import('views/appraisal/Appraisallist')));

const Orderlist = Loadable(lazy(() => import('views/order/Orderlist')));

const Auctionlist = Loadable(lazy(() => import('views/auction/auctionlist/Auctionlist')));
const AuctionHistory = Loadable(lazy(() => import('views/auction/auctionhistory/AuctionHistory')));



// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-typography',
                    element: <UtilsTypography />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-color',
                    element: <UtilsColor />
                }
            ]
        },
        {
            path: 'utils',
            children: [
                {
                    path: 'util-shadow',
                    element: <UtilsShadow />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'tabler-icons',
                    element: <UtilsTablerIcons />
                }
            ]
        },
        {
            path: 'icons',
            children: [
                {
                    path: 'material-icons',
                    element: <UtilsMaterialIcons />
                }
            ]
        },
        {
            path: 'customer',
            children: [
                {
                    path: 'customerlist',
                    element: <Customerlist />
                }
            ]
        },
        {
            path: 'customer',
            children: [
                {
                    path: 'customerdetail',
                    element: <CustomerDetail />
                }
            ]
        },
        {
            path: 'customer',
            children: [
                {
                    path: 'customergrade',
                    element: <Customergrade />
                }
            ]
        },
        {
            path: 'customer',
            children: [
                {
                    path: 'customergradedetail',
                    element: <CustomergradeDetail />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'productlist',
                    element: <Productlist />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'productdetail',
                    element: <ProductlistDetail />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'categorylist',
                    element: <Categorylist />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'brandlist',
                    element: <Brandlist />
                }
            ]
        },
        {
            path: 'product',
            children: [
                {
                    path: 'branddetail',
                    element: <BrandDetail />
                }
            ]
        },
        {
            path: 'appraisal',
            children: [
                {
                    path: 'appraisallist',
                    element: <Appraisallist />
                }
            ]
        },
        {
            path: 'appraisal',
            children: [
                {
                    path: 'appraisaldetail',
                    element: <AppraisallistDetail />
                }
            ]
        },
        {
            path: 'order',
            children: [
                {
                    path: 'orderlist',
                    element: <Orderlist />
                }
            ]
        },
        {
            path: 'order',
            children: [
                {
                    path: 'orderdetail',
                    element: <OrderlistDetail />
                }
            ]
        },
        {
            path: 'auction',
            children: [
                {
                    path: 'auctionlist',
                    element: <Auctionlist />
                }
            ]
        },
        {
            path: 'auction',
            children: [
                {
                    path: 'auctiondetail',
                    element: <AuctionlistDetail />
                }
            ]
        },
        {
            path: 'auction',
            children: [
                {
                    path: 'auctionhistory',
                    element: <AuctionHistory />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        }
    ]
};

export default MainRoutes;
