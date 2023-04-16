import Photo from "../../photo/contact.png"
import { SearchInut } from "../home/SearchInput"

export let Contact = () => {
    return (
        <div className="contact">
            <div className="path">
                <p>Home</p>
                /
                <p>Contact Us</p>
            </div>
            <div className="contactContent">
                <div className="contactContent_left">
                    <figure>
                        <img src={Photo} alt="" />
                    </figure>
                    <div>
                        <h3>
                            get in touch
                        </h3>
                        <p>contact@e-comm.ng</p>
                        <p>+2344556666534</p>
                        <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
                    </div>
                </div>
                <div className="contactContent_right">
                    <div>
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" id="fullname" placeholder="Create Fullname" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Create Email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <input type="text" id="message" placeholder="Type your message"/>
                    </div>
                </div>
            </div>
            <SearchInut/>
        </div>
    )
}