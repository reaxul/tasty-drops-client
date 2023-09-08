import React from "react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FiLoader } from "react-icons/fi";
import useAuth from "../../api/useAuth";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "../../redux/reduxApi/userApi";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const ProfileDetails = () => {
  const { user } = useAuth();
  const [isDisabled, setDisabled] = useState("");
  const { data: profileData } = useGetProfileQuery(`${user?.email}`);
  const [updateUserProfile, { error, isLoading }] = useUpdateProfileMutation();
  const { register, handleSubmit, control } = useForm();
  const watchForm = useWatch({ control });
  const onsubmit = (data) => {
    // update backend user data
    updateUserProfile({ email: user?.email, data })
      .then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          // update firebase user data
          // updateProfile({ name: data.name });
          toast.success("Profile updated!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(isLoading);

  return (
    <div className="bg-gray">
      {" "}
      <div className="pt-24 max-w-3xl mx-auto px-5 lg:px-0">
        <div className="border border-zinc-200 bg-white rounded">
          <h1 className="text-2xl font-bold text-zinc-600 p-5">
            Account Details
          </h1>
          <hr className="text-zinc-300 mt-2" />
          <form
            onSubmit={handleSubmit(onsubmit)}
            className="grid lg:grid-cols-2 gap-6 p-8 ">
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Name</span>
              <input
                {...register("name")}
                className="input-style"
                type="text"
                placeholder="Name"
                defaultValue={user?.displayName}
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Phone number</span>
              <input
                {...register("phone")}
                name="phone"
                type="text"
                defaultValue={profileData?.number}
                placeholder="phone number"
                className="input-style"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Email</span>
              <input
                disabled
                className="input-style"
                type="text"
                placeholder="email"
                defaultValue={user?.email}
              />
              <p className="text-sm text-zinc-700">
                To change your email address, please contact customer support.
              </p>
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-zinc-500 text-sm">Date of birth</span>
              <input
                {...register("date")}
                name="date"
                type="date"
                placeholder="date of birth"
                className="input-style"
              />
              <p className="text-sm text-zinc-700">
                We'll only use this to verify your age on restricted products.
              </p>
            </label>
            <button
              type="submit"
              className="py-2 bg-orange-500 text-white font-bold rounded ">
              {isLoading ? (
                <FiLoader
                  className="animate-spin m-auto text-white"
                  size={24}
                />
              ) : (
                "Update profile"
              )}
            </button>
          </form>
        </div>

        <div className="border border-zinc-200 mt-5 bg-white rounded">
          <h1 className="text-2xl font-bold text-zinc-800 p-5">
            Delete account
          </h1>
          <hr className="text-zinc-400 mt-2" />
          <div className="p-8 space-y-4  text-sm text-zinc-600 ">
            <h1>
              To submit a request for us to delete your account, type “DELETE”
              in the box below.
            </h1>
            <p>
              Once you’ve submitted your request you’ll no longer be able to log
              in, access your credit, or restore your account.
            </p>
            <p>
              We’ll delete your account and associated personal data within one
              month, and in line with our Privacy Policy. Deleting your account
              is permanent.
            </p>
            <div className="space-y-3">
              <p>Type “DELETE”</p>
              <span className="flex flex-col">
                <input
                  onChange={(e) => setDisabled(e.target.value)}
                  className="input-style"
                  type="text"
                  placeholder="Type “DELETE”
                  
"
                />
                <button
                  disabled={isDisabled !== "DELETE"}
                  className={`${
                    isDisabled === "DELETE"
                      ? "bg-red-500 hover:bg-red-600 transition-all"
                      : "bg-zinc-300"
                  } font-bold text-white rounded-md  py-2 mt-2 w-2/3`}>
                  Permanently delete account
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;