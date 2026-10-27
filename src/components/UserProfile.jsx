import { useParams } from "react-router-dom";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Avatar, AvatarFallback } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "../../components/ui/input-otp";

function UserProfile() {
  const { user } = useParams();

  return (
    <div className="w-full flex flex-col items-center justify-center pt-30">
      <h1 className="text-[50px] font-bold text-left w-3xl ">
        Welcome , {user}
      </h1>
      <Card className="w-full max-w-3xl my-5">
        <CardHeader>
          <CardTitle>
            <div className="flex gap-5">
              <Avatar
                className={`font-bold flex items-center justify-center p-6`}
              >
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center ">
                <div className="text-2xl font-normal">FirstName LastName</div>
                <div className="">
                  <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
                    Green
                  </Badge>
                </div>
              </div>
            </div>
          </CardTitle>
          <hr className="w-full" />
          <CardDescription>Profile</CardDescription>
          <CardAction>
            <Button variant="">
              <div className="text-lg">edit</div>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label htmlFor="firstname">First Name : </Label>
                <Input
                  id="firstname"
                  type="text"
                  placeholder="Enter first name"
                  required
                  disabled
                  className={``}
                  value={`first name`}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastname">Last Name : </Label>
                <Input
                  id="lastname"
                  type="text"
                  placeholder="Enter last name"
                  required
                  disabled
                  className={``}
                  value={`last name`}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E-mail : </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  disabled
                  className={``}
                  value={`last name`}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number : </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter phone munber"
                  required
                  disabled
                  className={``}
                  value={`0123456789`}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="age">Age : </Label>
                <Input
                  id="phone"
                  type="number"
                  placeholder="Enter phone munber"
                  required
                  disabled
                  className={``}
                  value={`18`}
                />
              </div>
              <div className="grid gap-1">
                <div className="">Gender :</div>
                <RadioGroup defaultValue="option-one" className={`flex`}>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      disabled
                      value="option-one"
                      id="option-one"
                    />
                    <Label htmlFor="option-one">Option One</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      disabled
                      value="option-two"
                      id="option-two"
                    />
                    <Label htmlFor="option-two">Option Two</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-1 items-end ">
                <Button variant="link" className={`flex justify-start w-fit`}>
                  Change Password ?
                </Button>
              </div>
              <div className=""></div>
              <div className="grid gap-2 items-baseline">
                <div className="flex flex-col justify-center gap-2">
                  <h1 className="text-lg font-bold">
                    Enter OTP we have sent to your mail :{" "}
                  </h1>
                  <InputOTP className={``} maxLength={4} pattern={/^[0-9]*$/}>
                    <InputOTPGroup className={`border border-[#888] `}>
                      <InputOTPSlot
                        className={`font-bold text-xl p-4 bg-white rounded-none `}
                        index={0}
                      />
                      <InputOTPSlot
                        className={`font-bold text-xl p-4 bg-white rounded-none `}
                        index={1}
                      />
                      <InputOTPSlot
                        className={`font-bold text-xl p-4 bg-white rounded-none `}
                        index={2}
                      />
                      <InputOTPSlot
                        className={`font-bold text-xl p-4 bg-white rounded-none `}
                        index={3}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                  <Button className={`cursor-pointer w-fit`}>Verify OTP</Button>
                  <div className="flex items-center gap-1">
                    <button>Resend </button>
                    OTP in 60s
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <div className="grid gap-2">
                <Label htmlFor="newPass">Enter New Password : </Label>
                <Input
                  id="newPass"
                  type="password"
                  placeholder="Enter new password"
                  required
                  className={``}
                  value={`eg.Test@1234`}
                />
              </div>
                <div className="grid gap-2">
                <Label htmlFor="newpass">Confirm New Password : </Label>
                <Input
                  id="newConfirmPass"
                  type="password"
                  placeholder="Confirm new password"
                  required
                  className={``}
                  value={``}
                />
              </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col items-baseline gap-2">
          <h2>Instructioins :-</h2>
          <ul className="list-disc pl-5">
            <li>Keep your profile information up to date.</li>
            <li>Use a valid email address and phone number.</li>
            <li>Contact support if you need help with your account.</li>
          </ul>
        </CardFooter>
        <CardFooter className="flex-col items-baseline gap-2">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vel
            labore deleniti temporibus doloremque, hic ratione excepturi
            repudiandae similique neque sint, necessitatibus cupiditate fuga,
            laboriosam velit. Sapiente, eaque voluptatem! Doloremque iure
            voluptatibus error minus.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}

export default UserProfile;
