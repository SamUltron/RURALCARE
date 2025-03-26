import React, { useState } from "react";
import { Save, User, Lock, Bell, Database, Shield } from "lucide-react";
import Form from "react-bootstrap/Form";
import TopRural from "../components/TopRural";
import { NavLink } from "react-router-dom";

const SettingsPage = () => {
  const [isProfile, setIsProfile] = useState('account');

  const checkProfile = (form) => {
    setIsProfile(form);
  };

  // const linkClass = ({ isActive }) =>
  //   isActive
  //     ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
  //     : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <section className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <TopRural />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-gray-400 text-lg">
            Manage your account settings and system preferences
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm font-medium text-white rounded-md bg-indigo-500 w-fit p-1">
          <NavLink
            to=""
            className={`${isProfile === 'account' ? "text-black bg-white rounded-md px-3 py-2" : ''}`}
            onClick={() => checkProfile("account")}
          >
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Account
            </div>
          </NavLink>

          <NavLink
            to=""
            className={`${isProfile === 'security' ? "text-black bg-white rounded-md px-3 py-2" : ''}`}
            onClick={() => checkProfile("security")}
          >
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4" />
              Security
            </div>
          </NavLink>

          <NavLink
            to=""
            className={`${isProfile === 'notifications' ? "text-black bg-white rounded-md px-3 py-2" : ''}`}
            onClick={() => checkProfile("notifications")}
          >
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </div>
          </NavLink>

          <NavLink
            to=""
            className={`${isProfile === 'data' ? "text-black bg-white rounded-md px-3 py-2" : ''}`}
            onClick={() => checkProfile("data")}
          >
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              Data Management
            </div>
          </NavLink>
        </div>

        {isProfile === "account" && (
          <form>
            <div className="grid gap-6 border rounded-md p-5">
              <div>
                <div className="mb-3">
                  <h3 className="text-3xl font-semibold tracking-tight mb-1">
                    Profile Information
                  </h3>
                  <p className="text-gray-500 text-[17px]">
                    Update your account details
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="block font-semibold"
                      >
                        First Name
                      </label>
                      <input
                        id="firstName"
                        className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                        placeholder="Robert"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block font-semibold">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                        placeholder="Johnson"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-semibold">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="robert.johnson@ruralcare.org"
                      className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="role" className="block font-semibold">
                      Role
                    </label>
                    <input
                      id="role"
                      placeholder="Doctor"
                      className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                      disabled
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-2 px-3 text-white hover:bg-indigo-600 transition-colors ease-in-out">
                    <Save className="h-4 w-4" />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {isProfile === "security" && (
          <div>
            <div className="grid gap-6">
              <div className="border rounded-md p-5">
                <div className="mb-3">
                  <h3 className="text-3xl font-semibold tracking-tight mb-1">
                    Change Password
                  </h3>
                  <p className="text-gray-500 text-[17px]">
                    Update your password
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="currentPassword"
                      className="block font-semibold"
                    >
                      Current Password
                    </label>
                    <input
                      id="currentPassword"
                      type="password"
                      className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="newPassword"
                      className="block font-semibold"
                    >
                      New Password
                    </label>
                    <input
                      id="newPassword"
                      type="password"
                      className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="confirmPassword"
                      className="block font-semibold"
                    >
                      Confirm New Password
                    </label>
                    <input
                      id="confirmPassword"
                      type="password"
                      className="border w-full p-2 placeholder:text-[15px] placeholder:text-black rounded-md"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-2 px-3 text-white hover:bg-indigo-600 transition-colors ease-in-out">
                    <Save className="h-4 w-4" />
                    Update Password
                  </button>
                </div>
              </div>

              <div className="border rounded-md p-5 space-y-7">
                <div className="mb-3">
                  <h3 className="text-3xl font-semibold tracking-tight mb-1">
                    Two-Factor Authentication
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Add an extra layer of security to your account
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <label htmlFor="2fa" className="block font-semibold">
                        Enable Two-Factor Authentication
                      </label>
                      <p className="text-sm text-gray-500">
                        Receive a verification code via SMS when logging in
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isProfile === "notifications" && (
          <div className="border rounded-md p-5">
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-semibold tracking-tight mb-1">
                  Notification Preferences
                </h3>
                <p className="text-sm text-gray-500">
                  Choose what notifications you receive
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label
                      htmlFor="emailNotifications"
                      className="block font-semibold"
                    >
                      Email Notifications
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive daily summaries and important alerts
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label
                      htmlFor="smsNotifications"
                      className="block font-semibold"
                    >
                      SMS Notifications
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive urgent alerts via SMS
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label
                      htmlFor="appointmentReminders"
                      className="block font-semibold"
                    >
                      Appointment Reminders
                    </label>
                    <p className="text-sm text-gray-500">
                      Receive reminders for upcoming appointments
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-2 px-3 text-white hover:bg-indigo-600 transition-colors ease-in-out">
                  <Save className="h-4 w-4" />
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}

        {isProfile === 'data' && (<div>
          <div className="grid gap-6">
            <div className="border rounded-md p-5 space-y-7">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight mb-1">
                  Data Backup
                </h3>
                <p className="text-sm text-gray-500">
                  Configure automatic data backups
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="autoBackup" className="block font-semibold">
                      Automatic Backup
                    </label>
                    <p className="text-sm text-gray-500">
                      Backup patient data automatically
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="backupFrequency"
                    className="block font-semibold"
                  >
                    Backup Frequency
                  </label>
                  <select
                    id="backupFrequency"
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="daily">Daily</option>
                    <option value="weekly">Weekly</option>
                    <option value="monthly">Monthly</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-2 px-3 text-white hover:bg-indigo-600 transition-colors ease-in-out">
                  <Save className="h-4 w-4" />
                  Save Settings
                </button>
              </div>
            </div>

            <div className="border rounded-md p-5 space-y-7">
              <div>
                <h3 className="text-3xl font-semibold tracking-tight mb-1">
                  Data Security
                </h3>
                <p className="text-sm text-gray-500">
                  Manage data encryption and security settings
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="encryption" className="block font-semibold">
                      End-to-End Encryption
                    </label>
                    <p className="text-sm">
                      Enable encryption for all patient data
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label htmlFor="auditLog" className="block font-semibold">
                      Audit Logging
                    </label>
                    <p className="text-sm">
                      Track all data access and modifications
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <button className="flex items-center justify-center border py-2 px-3 gap-2 font-medium rounded-md">
                  <Shield className="h-4 w-4" />
                  Security Audit
                </button>
                <button className="flex items-center gap-2 bg-indigo-700 rounded-md py-2 px-3 text-white hover:bg-indigo-600 transition-colors duration-300 ease-in-out">
                  <Save className="h-4 w-4" />
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </section>
  );
};

export default SettingsPage;
