import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className='border-t pt-5'>
                <h6 className="px-10 ">Categories</h6>
            <footer className="footer py-5 px-10">
  <nav>
    <Link href='#' className="link link-hover">Branding</Link>
    <Link href='#' className="link link-hover">Design</Link>
    <Link href='#' className="link link-hover">Marketing</Link>
    <Link href='#' className="link link-hover">Advertisement</Link>
  </nav>
  <nav>
    <Link href='#' className="link link-hover">About us</Link>
    <Link href='#' className="link link-hover">Contact</Link>
    <Link href='#' className="link link-hover">Jobs</Link>
    <Link href='#' className="link link-hover">Press kit</Link>
  </nav>
  <nav>
    <Link href='#' className="link link-hover">Terms of use</Link>
    <Link href='#' className="link link-hover">Privacy policy</Link>
    <Link href='#' className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
<footer className="footer text-base-content border-t px-10 py-4">
<nav>
    <Link href='#' className="link link-hover">Branding</Link>
    <Link href='#' className="link link-hover">Design</Link>
    <Link href='#' className="link link-hover">Marketing</Link>
    <Link href='#' className="link link-hover">Advertisement</Link>
  </nav>
  <nav>
    <Link href='#' className="link link-hover">About us</Link>
    <Link href='#' className="link link-hover">Contact</Link>
    <Link href='#' className="link link-hover">Jobs</Link>
    <Link href='#' className="link link-hover">Press kit</Link>
  </nav>
  <nav>
    <Link href='#' className="link link-hover">Terms of use</Link>
    <Link href='#' className="link link-hover">Privacy policy</Link>
    <Link href='#' className="link link-hover">Cookie policy</Link>
  </nav>
</footer>
        </footer>
    );
};

export default Footer;