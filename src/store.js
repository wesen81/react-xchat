import {createStore} from 'redux';
import {combineReducers} from 'redux'
import {common} from './components/common/CommonReducers';
import {chat} from './components/chat/ChatReducers';
import {carousel} from './components/carousel/CarouselReducers';
import {settings} from './components/settings/SettingsReducers';

const store = createStore(combineReducers({common, chat, carousel, settings}));

// Debug:
//	console.log(store.getState());
//

export default store;
