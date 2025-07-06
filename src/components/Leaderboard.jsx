import React, { useState } from "react";

const initialGroups = [
  {
    id: "grp1",
    name: "Green Warriors",
    leaderboard: [
      {
        id: 1,
        name: "Aisha Khan",
        contribution: 320,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        id: 2,
        name: "Ravi Sharma",
        contribution: 450,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        id: 3,
        name: "Mei Ling",
        contribution: 275,
        image: "https://randomuser.me/api/portraits/women/65.jpg",
      },
    ],
  },
  {
    id: "grp2",
    name: "Eco Champs",
    leaderboard: [
      {
        id: 4,
        name: "Leo Nguyen",
        contribution: 500,
        image: "https://randomuser.me/api/portraits/men/28.jpg",
      },
      {
        id: 5,
        name: "Sara Lopez",
        contribution: 410,
        image: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        id: 6,
        name: "Priya Patel",
        contribution: 390,
        image: "https://randomuser.me/api/portraits/women/50.jpg",
      },
    ],
  },
  {
    id: "grp3",
    name: "Planet Protectors",
    leaderboard: [
      {
        id: 7,
        name: "Carlos Diaz",
        contribution: 470,
        image: "https://randomuser.me/api/portraits/men/45.jpg",
      },
      {
        id: 8,
        name: "Emily Smith",
        contribution: 420,
        image: "https://randomuser.me/api/portraits/women/12.jpg",
      },
      {
        id: 9,
        name: "Akira Tanaka",
        contribution: 350,
        image: "https://randomuser.me/api/portraits/men/60.jpg",
      },
    ],
  },
];

const myProfile = {
  id: "me",
  name: "Tejash",
  contribution: 0,
  image: "https://api.dicebear.com/7.x/adventurer/svg?seed=tejash",
};

const Leaderboard = () => {
  const [groups, setGroups] = useState(initialGroups);
  const [joinedGroup, setJoinedGroup] = useState(null);
  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [newGroupName, setNewGroupName] = useState("");

  const handleJoin = (groupId) => {
    setJoinedGroup(groupId);
  };

  const handleCreateGroup = () => {
    setShowCreatePopup(true);
    setNewGroupName("");
  };

  const handleCreateGroupSubmit = (e) => {
    e.preventDefault();
    if (!newGroupName.trim()) return;
    const newId = "grp" + (groups.length + 1);
    const newGroup = {
      id: newId,
      name: newGroupName.trim(),
      leaderboard: [myProfile],
    };
    setGroups([...groups, newGroup]);
    setJoinedGroup(newId);
    setShowCreatePopup(false);
  };

  const selectedGroup = groups.find((g) => g.id === joinedGroup);

  
  let leaderboardWithMe = [];
  if (selectedGroup) {
    const alreadyIn = selectedGroup.leaderboard.some((u) => u.id === "me");
    leaderboardWithMe = alreadyIn
      ? selectedGroup.leaderboard
      : [...selectedGroup.leaderboard, myProfile];
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">
        🌿 Eco Groups
      </h2>
      {!joinedGroup ? (
        <div className="flex flex-col items-center gap-4">
          <p className="mb-2 text-gray-700">
            Join a group to view its leaderboard:
          </p>
          {groups.map((group) => (
            <button
              key={group.id}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded shadow block w-full max-w-xs"
              onClick={() => handleJoin(group.id)}
            >
              Join {group.name}
            </button>
          ))}
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded shadow block w-full max-w-xs mt-2"
            onClick={handleCreateGroup}
          >
            + Create your own group
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-green-700">
              {selectedGroup.name} Leaderboard
            </h3>
            <button
              className="text-xs bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded"
              onClick={() => setJoinedGroup(null)}
            >
              Leave Group
            </button>
          </div>
          <ul>
            {leaderboardWithMe
              .sort((a, b) => b.contribution - a.contribution)
              .map((user, index) => (
                <li
                  key={user.id}
                  className={`flex items-center justify-between p-3 border-b ${
                    user.id === "me" ? "bg-green-50 font-bold" : ""
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-500 font-bold w-5">
                      {index + 1}.
                    </span>
                    <img
                      src={user.image}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span>
                      {user.name}
                      {user.id === "me" && (
                        <span className="ml-2 text-xs text-green-700">
                          (You)
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold">
                    {user.contribution} pts
                  </span>
                </li>
              ))}
          </ul>
        </>
      )}

      {/* Create Group Popup */}
      {showCreatePopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <form
            className="bg-white rounded-lg shadow-lg p-6 min-w-[300px] max-w-xs text-center"
            onSubmit={handleCreateGroupSubmit}
          >
            <h3 className="text-lg font-bold text-green-700 mb-4">
              Create Your Own Group
            </h3>
            <input
              type="text"
              className="border border-gray-300 rounded px-3 py-2 w-full mb-4 text-black"
              placeholder="Enter group name"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              autoFocus
              required
            />
            <div className="flex justify-center gap-2">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded"
              >
                Create
              </button>
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded"
                onClick={() => setShowCreatePopup(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;
