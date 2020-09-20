import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

function preventDefault(event) {
    event.preventDefault();
}

export default function Deposits() {
    return (
        <React.Fragment>
      <Typography component="h1" variant="h6">Recent Deposits</Typography>
            <Typography component="p" variant="h4">
                $3,024.00
      </Typography>
            <Typography color="textSecondary">
                on 15 March, 2019
      </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    View balance
        </Link>
            </div>
        </React.Fragment>
    );
}