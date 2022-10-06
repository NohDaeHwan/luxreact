// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const productgroup = {
    id: 'productgroup',
    // title: '상품',
    type: 'group',
    children: [
        {
            id: 'product',
            title: '상품관리',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'productlist',
                    title: '상품목록',
                    type: 'item',
                    url: '/product/productlist',
                    breadcrumbs: false
                },
                {
                    id: 'categorylist',
                    title: '카테고리설정',
                    type: 'item',
                    url: '/product/categorylist',
                    breadcrumbs: false
                },
                {
                    id: 'brandlist',
                    title: '브랜드설정',
                    type: 'item',
                    url: '/product/brandlist',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default productgroup;
