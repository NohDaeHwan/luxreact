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

const customergroup = {
    id: 'customergroup',
    // title: '회원',
    type: 'group',
    children: [
        {
            id: 'customer',
            title: '회원관리',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'customerlist',
                    title: '회원목록',
                    type: 'item',
                    url: '/customer/customerlist',
                    breadcrumbs: false
                },
                {
                    id: 'customergrade',
                    title: '등급설정',
                    type: 'item',
                    url: '/customer/customergrade',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default customergroup;
