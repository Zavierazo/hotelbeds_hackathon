import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount, withOptions } from 'react-mounter';


import Main from '../imports/ui/Main';

const mountWithOpts = withOptions({ rootId: 'render-main' }, mount);

FlowRouter.route('/', {
    name: 'Main.show',
    action() {
        mountWithOpts(Main, {
            main: <Main key="MainView"/>,
        });
    },
});