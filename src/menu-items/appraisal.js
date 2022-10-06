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

const appraisalgroup = {
    id: 'appraisalgroup',
    // title: '검수관리',
    type: 'group',
    children: [
        {
            id: 'appraisal',
            title: '검수목록',
            type: 'item',
            url: '/appraisal/appraisallist',
            icon: icons.IconTypography,
            breadcrumbs: false
        },
    ]
};

export default appraisalgroup;
