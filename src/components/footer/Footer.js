import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer class="site-footer">
            <div class="text-center">
              <p>
                &copy;  <strong>Dev code dao</strong>.
              </p>
              <div class="credits">
                Tạo bởi <a href="/admin">Dev dạo</a>
              </div>
              <a href="advanced_form_components.html#" class="go-top">
                <i class="fa fa-angle-up"></i>
                </a>
            </div>
          </footer>
        );
    }
}

export default Footer;