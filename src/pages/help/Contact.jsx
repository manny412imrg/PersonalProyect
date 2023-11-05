const Contact = () => {
    return (
      <div className="contact">
          <h3>Contact IVN</h3>
            <form>
                <label>
                    <span>Your Email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Your message:</span>
                    <textarea name="mesage" required></textarea>
                </label>
                <button>Submit</button>
            </form>
      </div>
    )
  }
  
  export default Contact