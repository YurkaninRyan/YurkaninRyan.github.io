/* eslint-disable import/no-extraneous-dependencies */
/* We want these to be in our devDependencies because they are a part of the jest tests only */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
