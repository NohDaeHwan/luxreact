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

const ordergroup = {
    id: 'ordergroup',
    // title: '검수관리',
    type: 'group',
    children: [
        {
            id: 'order',
            title: '주문내역',
            type: 'item',
            url: '/order/orderlist',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
    ]
};

export default ordergroup;
