import classes from './headernav.module.css'

const Nav = props => {
    return  (
    <nav className={classes.nav}>
    <div className={classes["nav-home"]} > GreySpring </div>
    <ul className={classes["nav-home__links"]}>
        <li>Newsletter</li>
        <li>Charts</li>
        <li>
            <button className={classes.navButton}> Sign Up/In</button>
        </li>
    </ul>
</nav>)
}

export default Nav;