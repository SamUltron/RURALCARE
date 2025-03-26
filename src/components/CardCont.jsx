import React from "react";
import Card from "./Card";
import { Activity, FileText, Shield, Users } from "lucide-react";

const CardCont = () => {
  return (
    <div className="mt-10 lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <Card>
          <div className="space-x-2 flex items-center mb-5">
            <Shield size={20} color="indigo" />
            <h3 className="text-indigo-600 text-2xl font-semibold">
              Secure Data Storage
            </h3>
          </div>
          <p className="mt-2 text-indigo-700">
            Patient data is encrypted and stored securely, <br /> complying with
            healthcare privacy regulations and <br /> standards.
          </p>
        </Card>

        <Card>
          <div className="space-x-2 flex items-center mb-5">
            <Users size={20} color="indigo" />
            <h3 className="text-indigo-600 text-2xl font-semibold">
            Easy Patient Registration
            </h3>
          </div>
          <p className="mt-2 text-indigo-700">
          Quickly register new patients with a simple form <br />designed for efficiency in rural healthcare settings.
          </p>
        </Card>
        <Card>
          <div className="space-x-2 flex items-center mb-5">
            <FileText size={20} color="indigo" />
            <h3 className="text-indigo-600 text-2xl font-semibold">
            Comprehensive Records
            </h3>
          </div>
          <p className="mt-2 text-blue-700">
          Maintain detailed patient histories, treatments,<br /> and follow-ups in an organized and accessible format.
          </p>
        </Card>
        <Card>
          <div className="space-x-2 flex items-center mb-5">
            <Activity size={20} color="blue" />
            <h3 className="text-indigo-600 text-2xl font-semibold">
            Works Offline
            </h3>
          </div>
          <p className="mt-2 text-blue-700">
          Designed to function in areas with limited <br /> connectivity, with data synchronization when <br />connection is available.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default CardCont;
