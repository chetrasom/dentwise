// Components
import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";

const Homepage = () => {
    return (
        <div>
            Homepage
            <Button>See all</Button>
            <SignUpButton>
                Sign up
            </SignUpButton>
        </div>
    )
}

export default Homepage;