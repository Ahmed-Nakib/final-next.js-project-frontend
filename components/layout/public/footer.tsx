
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { ChevronRight, FacebookIcon, LinkedinIcon, MailIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function PublicFooter() {
    return (
        <div className="bg-white pt-16">
            <div className="my-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                    <div>
                        <h4 className="text-lg font-semibold">Get In Touch</h4>
                        <span className="block h-0.5 bg-gray-200 mt-2 mb-5">
                            <span className="block w-24 bg-primary h-0.5"></span>
                        </span>
                        <p><strong>Address:</strong> 514 S. Magnolia St. Orlando, FL 32806</p>
                        <p><strong>Phone:</strong> 53876234</p>
                        <p><strong>Email:</strong> demoemail123@gmail.com</p>
                        <p><strong>Saturday-Sunday ::</strong> 9:27 PM - 9:27 PM</p>

                        <ul className="py-5 flex gap-x-3">
                            <li className="w-10 h-10 bg-primary flex justify-center items-center btn-animate rounded cursor-pointer">
                                <a href="#" className="text-white size-6"><FacebookIcon/></a>
                            </li>
                            <li className="w-10 h-10 bg-primary flex justify-center items-center btn-animate rounded cursor-pointer">
                                <a href="#" className="text-white size-6"><TwitterIcon/></a>
                            </li>
                            <li className="w-10 h-10 bg-primary flex justify-center items-center btn-animate rounded cursor-pointer">
                                <a href="#" className="text-white size-6"><YoutubeIcon/></a>
                            </li>
                            <li className="w-10 h-10 bg-primary flex justify-center items-center btn-animate rounded cursor-pointer">
                                <a href="#" className="text-white size-6"><LinkedinIcon/></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Usefull Links</h4>
                        <span className="block h-0.5 bg-gray-200 mt-2 mb-5">
                            <span className="block w-24 bg-primary h-0.5"></span>
                        </span>
                        <ul className="space-y-1.5">
                            <li className="hover:text-primary">
                                <Link href={"/"} className="flex gap-x-1 items-center"><ChevronRight size={18}/> Faq</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href={"/"} className="flex gap-x-1 items-center"><ChevronRight size={18}/> About Us</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href={"/"} className="flex gap-x-1 items-center"><ChevronRight size={18}/> Privacy Policy</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href={"/"} className="flex gap-x-1 items-center"><ChevronRight size={18}/> Terms & Service</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href={"/"} className="flex gap-x-1 items-center"><ChevronRight size={18}/> Return Policy</Link>
                            </li>
                            <li className="hover:text-primary">
                                <Link href={"/"} className="flex gap-x-1 items-center"><ChevronRight size={18}/> How It Works</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Newsletter</h4>
                        <span className="block h-0.5 bg-gray-200 mt-2 mb-5">
                            <span className="block w-24 bg-primary h-0.5"></span>
                        </span>
                        <form>
                        <InputGroup className="rounded-none">
                            <InputGroupInput placeholder="Email ...." />
                              <InputGroupAddon>
                                  <MailIcon />
                              </InputGroupAddon>
                             <InputGroupAddon align="inline-end">
                             </InputGroupAddon>
                        </InputGroup>
                        <Button className="w-full mt-3 cursor-pointer btn-animate">Subscribe</Button>
                        </form>
                        <p className="text-sm text-gray-400 pt-3 mb-5">Subscribe to our Newsletter to receive early discount offers, latest news, sales and promo information.</p>
                         <Image
                         src={"/cards.png"}
                         alt="cards Image"
                         width={300}
                         height={50}
                         />
                    </div>
                </div>
                <div className="border-t mt-3 text-center">
                    <p className="py-2.5">OmniMart © All rights reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default PublicFooter;




