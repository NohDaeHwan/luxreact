import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';
import customergroup from './customer';
import productgroup from './product';
import appraisalgroup from './appraisal';
import ordergroup from './order';
import auctiongroup from './auction';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [dashboard, customergroup, productgroup, appraisalgroup, ordergroup, auctiongroup, pages, utilities, other]
};

export default menuItems;
