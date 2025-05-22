import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Örnek kullanıcı veritabanı (gerçek uygulamada bir veritabanı kullanılmalı)
const users = [
  {
    id: 1,
    username: "emre",
    // "admin" şifresinin yeni hash'i
    password: "$2b$10$ohGqFMeLnLS6mHcwQ4Qvoem2XPdRb40UVQ5MNyMm7EZGEoz2t.y7C",
    roles: ["ADMIN", "SUPER-USER", "READ"],
  },
];

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Şifre hash'ini oluşturmak için yardımcı fonksiyon
async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Kullanıcıyı bul
    const user = users.find((u) => u.username === username);
    if (!user) {
      console.log("User not found:", username);
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    // Şifreyi doğrula
    const isValidPassword = await bcrypt.compare(password, user.password);
    console.log("Password validation:", { 
      provided: password, 
      isValid: isValidPassword 
    });

    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 401 }
      );
    }

    // JWT token oluştur
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        roles: user.roles,
      },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    // Refresh token oluştur
    const refreshToken = jwt.sign(
      { id: user.id },
      JWT_SECRET,
      { expiresIn: "7d" }
    );

    return NextResponse.json({
      user: {
        id: user.id,
        username: user.username,
        roles: user.roles,
      },
      accessToken: token,
      refreshToken: refreshToken,
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 