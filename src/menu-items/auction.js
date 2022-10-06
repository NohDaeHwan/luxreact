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

const auctiongroup = {
    id: 'auctiongroup',
    // title: '회원',
    type: 'group',
    children: [
        {
            id: 'auction',
            title: '경매관리',
            type: 'collapse',
            icon: icons.IconWindmill,
            children: [
                {
                    id: 'auctionlist',
                    title: '경매목록',
                    type: 'item',
                    url: '/auction/auctionlist',
                    breadcrumbs: false
                },
                {
                    id: 'auctiongrade',
                    title: '과거경매내역',
                    type: 'item',
                    url: '/auction/auctionhistory',
                    breadcrumbs: false
                }
            ]
        }
    ]
};

export default auctiongroup;
