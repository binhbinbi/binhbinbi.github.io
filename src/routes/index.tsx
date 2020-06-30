import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Loading from '../components/Loading';
const HomePage = React.lazy(() => import('../pages/Homepage'));

interface State {
}
class Routes extends React.Component<{}, State> {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="relative">
                <BrowserRouter>
                    <React.Suspense fallback={<Loading />}>
                        <Route
                            path="/"
                            component={HomePage}
                        />
                    </React.Suspense>
                </BrowserRouter>
            </div>
        );
    }
}

export default Routes;
