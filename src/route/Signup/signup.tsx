import HomeHeader from '../../components/homeheader'
import NavBar from '../../components/navbar'

function SignUp() {
return (
    <>
<NavBar />
<HomeHeader />
<div className="core-wrapper">
<div className="flex-padder"></div>

<div className="flex-wrapper">
<div className="signup-wrapper container bg-black">

<section className="signup-form">
  <h2>Sign Up</h2>
  <div className="signup-form-form">
    <form action="includes/signup.inc.php" method="post">
      <label htmlFor="uid">Username</label>
        <input type="text" name="uid" />
      <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="name@example.com" />
      <label htmlFor="pwd">Password</label>
        <input type="password" name="pwd" />
      <label htmlFor="pwdrepeat">Repeat Password</label>
        <input type="password" name="pwdrepeat" />
      <div>
        <button type="submit" name="submit">Sign Up</button>
      </div>
    </form>
  </div>
  </section>

</div>
</div>

<div className="flex-padder"></div>
</div>
    </>
  )
}

export default SignUp
