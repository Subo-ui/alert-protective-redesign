import React from 'react';
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-32">
      <div className="max-w-2xl mx-auto mt-16">
        {/* Payment Callout */}
        <div className="bg-white shadow rounded-lg p-6 mb-8 border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Pay your bill online!</h1>
          <div className="text-lg text-gray-700 space-y-4 mb-6">
            <p>
              When you click the green box below you will be redirected to our online payment portal. If this is your first time making a payment online, you will need to call our office at <a href="tel:8554336700" className="text-deep-red font-bold hover:underline">(855) 433-6700</a> to request your Sedona customer number.
            </p>
            <p>
              Once you have this, you can create your account through the payment portal and easily pay bills. If you already know your Sedona customer number, then you will be able to complete the process and make a payment.
            </p>
          </div>
          <a
            href="https://alertpay.sedonaoffice.com/login.aspx?ReturnUrl=%2f"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded shadow text-lg transition"
          >
            Make a Payment
          </a>
        </div>

        {/* Quote Request Box */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Request a FREE security system quote today.</h2>
          <p className="text-gray-700 mb-2">Call Alert Protective, Inc. and speak with a security specialist:</p>
          <a href="tel:8554336700" className="block text-2xl font-bold text-red-600 mb-2">(855) 433-6700</a>
          <p className="text-gray-500 text-sm">Or use our online quote form.</p>
        </div>
      </div>
    </div>
  );
} 