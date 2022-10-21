import { UTurnLeftOutlined, UTurnLeftRounded } from '@mui/icons-material';
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <div className='Footer'>
          <h5>Questions? Contact us.</h5>

      <div className='Footer_details'>

<ul className='row_1'>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Investor Relations</a></li>
    <li><a href="#">Privacy</a></li>
    <li><a href="#">Speed Test</a></li>
</ul>
<ul className='row_2'>
    <li><a href="#">Help Center</a></li>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Cookie Preferences</a></li>
    <li><a href="#">Legal Notices</a></li>
</ul>
      </div>
    </div>
  )
}

export default Footer