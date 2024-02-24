document.addEventListener('DOMContentLoaded', function(){
    const CarRental = {
        Init: function(config){
            this.config = config;

            this.BindEvents();
        },
        BindEvents: function(){
            let here = this.config;

            here.btn_book.addEventListener('click', this.NavLinks.bind(this, {param: 1}));
            here.btn_learn.addEventListener('click', this.NavLinks.bind(this, {param: 2}));
            here.btn_register.addEventListener('click', this.NavLinks.bind(this, {param: 3}));
            here.btn_signin.addEventListener('click', this.NavLinks.bind(this, {param: 4}));
            here.btn_close.addEventListener('click', this.NavLinks.bind(this, {param: 5}));
            here.btn_close_signin.addEventListener('click', this.NavLinks.bind(this, {param: 6}));
            here.div_citroen.addEventListener('click', this.AppendInfos.bind(this, {param: 1}));
            here.div_hamburger_icon.addEventListener('click', this.ToggleMenu);
            here.div_peugeot.addEventListener('click', this.AppendInfos.bind(this, {param: 2}));
            here.div_toyota.addEventListener('click', this.AppendInfos.bind(this, {param: 3}));
        },
        ToggleMenu: ()=> {
            const self = CarRental.config;

            self.div_hamburger_icon.classList.toggle('open');
            self.div_menu_links.classList.toggle('open');
        },
        NavLinks: (e)=> {
            const self = CarRental.config;
            const route = (typeof e == 'object') ? e.param : e ;

            switch(route){
                case 1:
                    location.href = '#sec-book';
                    break;
                case 2:
                    location.href = '#sec-about';
                    break;
                case 3:
                    self.div_popup.classList.add('open-popup');
                    break;
                case 4:
                    self.div_popup_signin.classList.add('open-popup');
                    break;
                case 5:
                    self.div_popup.classList.remove('open-popup');
                    break;
                case 6:
                    self.div_popup_signin.classList.remove('open-popup');
                    break;
                default:
                    console.log('Please Specify Which Route');
                    break;
            }
        },
        AppendInfos: (e)=> {
            const self = CarRental.config;
            const route = (typeof e == 'object') ? e.param : e ;

            switch(route){
                case 1:
                    self.img_car_display.src = 'car_assets/citroen.jpg';
                    self.img_car_display.display = 'block';
                    self.img_car_display_pc.src = 'car_assets/citroen.jpg';
                    self.img_car_display_pc.display = 'block';

                    let citroenHTML = `
                        <tr>
                            <th colspan="2">₱1,000 / Day</th>
                        </tr>
                        <tr>
                            <td>Model</td>
                            <td>Citroen</td>
                        </tr>
                        <tr>
                            <td>Seats</td>
                            <td>5/5</td>
                        </tr>
                        <tr>
                            <td>Doors</td>
                            <td>5/5</td>
                        </tr>
                        <tr>
                            <td>AC</td>
                            <td>Yes</td>
                        </tr>
                    `;

                    self.tbl_tbody.innerHTML = citroenHTML;
                    break;
                case 2:
                    self.img_car_display.src = 'car_assets/peugeot.jpg';
                    self.img_car_display.display = 'block';
                    self.img_car_display_pc.src = 'car_assets/peugeot.jpg';
                    self.img_car_display_pc.display = 'block';
                    let peugeotHTML = `
                            <tr>
                                <th colspan="2">₱2,000 / Day</th>
                            </tr>
                            <tr>
                                <td>Model</td>
                                <td>Peugeot</td>
                            </tr>
                            <tr>
                                <td>Seats</td>
                                <td>4/5</td>
                            </tr>
                            <tr>
                                <td>Doors</td>
                                <td>3/5</td>
                            </tr>
                            <tr>
                                <td>AC</td>
                                <td>Yes</td>
                            </tr>
                    `;

                    self.tbl_tbody.innerHTML = peugeotHTML;
                    break;
                case 3:
                    self.img_car_display.src = 'car_assets/toyota.jpg';
                    self.img_car_display.display = 'block';
                    self.img_car_display_pc.src = 'car_assets/toyota.jpg';
                    self.img_car_display_pc.display = 'block';
                    let toyotaHTML = `
                            <tr>
                                <th colspan="2">₱3,000 / Day</th>
                            </tr>
                            <tr>
                                <td>Model</td>
                                <td>Toyota</td>
                            </tr>
                            <tr>
                                <td>Seats</td>
                                <td>5/5</td>
                            </tr>
                            <tr>
                                <td>Doors</td>
                                <td>4/5</td>
                            </tr>
                            <tr>
                                <td>AC</td>
                                <td>Yes</td>
                            </tr>
                    `;
                    self.tbl_tbody.innerHTML = toyotaHTML;
                    break;
                default: 
                    console.log('Please Specify Which Route');
                    break;
            }
        }
    };
    CarRental.Init({
        btn_close           :           document.querySelector('#btn-close'),
        btn_close_signin    :           document.querySelector('#btn-close-signin'),
        btn_signin          :           document.querySelector('#btn-signin'),
        btn_register        :           document.querySelector('#btn-register'),
        btn_book            :           document.querySelector('#btn-book'),
        btn_learn           :           document.querySelector('#btn-learn'),

        div_hamburger_icon  :           document.querySelector('.div-hamburger-icon'),
        div_menu_links      :           document.querySelector('.div-menu-links'),
        div_popup           :           document.querySelector('.div-popup'),
        div_popup_signin    :           document.querySelector('.div-popup-signin'),
        div_citroen         :           document.querySelector('#div-citroen'),
        div_peugeot         :           document.querySelector('#div-peugeot'),
        div_toyota          :           document.querySelector('#div-toyota'),

        img_car_display     :           document.querySelector('.img-car-display'),
        img_car_display_pc  :           document.querySelector('#img-car-display-pc'),
        tbl_tbody           :           document.querySelector('#tbl-tbody')
    });
});