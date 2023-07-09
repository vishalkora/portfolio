import React from 'react'

function FooterApp() {
    return (
        <div className='container mt-5 mb-0'>
            <div className='row footer'>
                <div className='col-lg-4'>
                    <h5>No ©copyright issues.</h5>
                    <p>Feel free to copy. If you need any help, ping me !</p>
                </div>
                <div className='col-lg-4'>
                    <h5>Thanks for visiting !</h5>
                    <p>Made with ❤️ in India</p>
                </div>
                <div className='col-lg-4 info-box'>
                    <h5>You can find me on</h5>
                    <div class="social-links">
                        <a href="https://github.com/vishalkora" target='_blank' class="github"><i class="bi bi-github"></i></a>
                        <a href="https://medium.com/@Vishalkora" target='_blank' class="medium"><i class="bi bi-medium"></i></a>
                        <a href="https://stackoverflow.com/users/18223400/vishal-kora" target='_blank' class="stackOverflow"><i class="bi bi-stack-overflow"></i></a>
                        <a href="https://www.linkedin.com/in/vishalkora" target='_blank' class="linkedin"><i class="bi bi-linkedin"></i></a>
                        <a href="https://web.whatsapp.com/send?phone=919510175147&text=hello!" target='_blank' class="whatsapp"><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterApp