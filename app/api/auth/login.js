import { signIn } from "@/auth";
import User from "@/models/User";

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials." });
    }
    // If credentials are valid, sign in user
    await signIn("credentials", { email, password });
    // Send role along with the success response
    res.status(200).json({ success: true, role: user.role });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Something went wrong while trying to log you in." });
  }
}
