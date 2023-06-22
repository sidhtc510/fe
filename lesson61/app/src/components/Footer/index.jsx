import React from "react";
import s from "./s.module.css";
import Container from "../UI/Container";
export default function Footer() {
    return (
        <Container>
            <footer>
                <div>
                    <h2>Sapphire</h2>
                    <p>
                        Amazing NFTs marketplace, Authentic and unique digital
                        creation.
                    </p>
                    <div className={s.icons}>
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                        <img src="#" alt="" />
                    </div>
                </div>

                <div className={s.mrc}>
                    <div>
                        <h3>Marketplace</h3>
                        <p>Explore.</p>
                        <p>NFTs.</p>
                        <p>Collectibles.</p>
                        <p>Virtual Reality.</p>
                    </div>
                    <div>
                        <h3>Resources</h3>
                        <p>Help Center.</p>
                        <p>Partners.</p>
                        <p>Blog.</p>
                        <p>Newsletter .</p>
                    </div>
                    <div>
                        <h3>Company</h3>
                        <p>About Us.</p>
                        <p>Careers.</p>
                        <p>Support.</p>
                        <p>Newsletter</p>
                    </div>
                </div>
            </footer>
        </Container>
    );
}
