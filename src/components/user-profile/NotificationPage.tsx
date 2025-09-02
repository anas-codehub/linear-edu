"use client";

import { Button, Tab, Tabs } from "@heroui/react";
import {
  Bell,
  Check,
  X,
  Filter,
  Mail,
  MessageSquare,
  ThumbsUp,
  UserPlus,
} from "lucide-react";
import { useState } from "react";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "message",
      title: "New message from Sarah",
      content: "Hey, can you review the latest design mockups?",
      time: "10 min ago",
      read: false,
      icon: <MessageSquare className="text-blue-500" />,
    },
    {
      id: 2,
      type: "like",
      title: "Alex liked your post",
      content: "Your project update got 15 likes",
      time: "1 hour ago",
      read: true,
      icon: <ThumbsUp className="text-green-500" />,
    },
    {
      id: 3,
      type: "system",
      title: "System update",
      content: "New features available in version 2.3",
      time: "3 hours ago",
      read: false,
      icon: <Bell className="text-purple-500" />,
    },
    {
      id: 4,
      type: "connection",
      title: "New connection request",
      content: "John wants to connect with you",
      time: "1 day ago",
      read: true,
      icon: <UserPlus className="text-orange-500" />,
    },
    {
      id: 5,
      type: "email",
      title: "Weekly digest",
      content: "Your weekly summary is ready",
      time: "2 days ago",
      read: true,
      icon: <Mail className="text-red-500" />,
    },
  ]);

  const [selectedTab, setSelectedTab] = useState("all");

  const markAsRead = (id: number) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const filteredNotifications = notifications.filter((notif) => {
    if (selectedTab === "all") return true;
    if (selectedTab === "unread") return !notif.read;
    return notif.type === selectedTab;
  });

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notifications</h1>
      </div>

      <div className="space-y-3">
        {filteredNotifications.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No notifications found
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 rounded-lg border transition-all bg-blue-50 dark:bg-dark-2 border-blue-200`}
            >
              <div className="flex gap-3">
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className="text-sm text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{notification.content}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
