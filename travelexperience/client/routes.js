import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';


import App from '../imports/ui/App';
import Main from '../imports/ui/Main';
import Experiencers from '../imports/ui/Experiencers';
import Buy from '../imports/ui/Buy';

const mountWithOpts = withOptions({ rootId: 'render-main' }, mount);

FlowRouter.route('/', {
    name: 'Main.show',
    action() {
        mountWithOpts(App, {
            main: <Main key="MainView"/>,
        });
    },
});


FlowRouter.route('/experiencers', {
    name: 'Experiencers.show',
    action() {
        mountWithOpts(App, {
            main: <Experiencers key="ExperiencersView"/>,
        });
    },
});


FlowRouter.route('/buy', {
    name: 'Buy.show',
    action() {
        mountWithOpts(App, {
            main: <Buy key="BuyView"/>,
        });
    },
});