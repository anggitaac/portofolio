// components/FluidCanvas.jsx
"use client";

import React, { useRef, useEffect, useState } from 'react';

const FluidCanvas = () => {
    const canvasRef = useRef(null);
    const [infoBoxVisible, setInfoBoxVisible] = useState(true);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');

        let width, height;
        const DAMPING = 0.99; // Mengurangi gelombang secara bertahap
        const SPREAD = 0.01; // Kecepatan penyebaran gelombang
        const RESOLUTION = 2; // "Ukuran piksel" virtual untuk simulasi, lebih kecil = lebih halus tapi lebih berat
        const DISTURBANCE_RADIUS = 30; // Radius gangguan mouse
        const DISTURBANCE_FORCE = 1000; // Kekuatan gangguan mouse

        let wave = {
            current: [],
            previous: [],
            cols: 0,
            rows: 0
        };

        // Fungsi untuk menginisialisasi buffer gelombang
        const initWaveBuffers = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            wave.cols = Math.ceil(width / RESOLUTION);
            wave.rows = Math.ceil(height / RESOLUTION);

            // Inisialisasi kedua buffer dengan nol
            wave.current = new Array(wave.cols * wave.rows).fill(0);
            wave.previous = new Array(wave.cols * wave.rows).fill(0);
        };

        // Fungsi untuk mengganggu permukaan air di lokasi tertentu
        const disturb = (x, y, radius, force) => {
            // Konversi koordinat piksel ke koordinat grid simulasi
            const startCol = Math.max(0, Math.floor((x - radius) / RESOLUTION));
            const endCol = Math.min(wave.cols, Math.ceil((x + radius) / RESOLUTION));
            const startRow = Math.max(0, Math.floor((y - radius) / RESOLUTION));
            const endRow = Math.min(wave.rows, Math.ceil((y + radius) / RESOLUTION));

            for (let r = startRow; r < endRow; r++) {
                for (let c = startCol; c < endCol; c++) {
                    const idx = r * wave.cols + c;
                    const cellX = c * RESOLUTION + RESOLUTION / 2;
                    const cellY = r * RESOLUTION + RESOLUTION / 2;
                    const distance = Math.sqrt(Math.pow(cellX - x, 2) + Math.pow(cellY - y, 2));

                    if (distance < radius) {
                        // Terapkan kekuatan lebih besar di tengah gangguan
                        const strength = force * (1 - distance / radius);
                        wave.current[idx] += strength;
                    }
                }
            }
        };

        // Handle window resize
        const handleResize = () => {
            initWaveBuffers();
        };

        // Handle mouse movement
        const handleMouseMove = (e) => {
            // Memicu gangguan di lokasi mouse
            disturb(e.clientX, e.clientY, DISTURBANCE_RADIUS, DISTURBANCE_FORCE);
        };

        let animationFrameId;
        let hueOffset = 0; // Offset hue global untuk efek pelangi berputar

        // Loop animasi utama
        const animate = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Proses simulasi gelombang
    for (let r = 1; r < wave.rows - 1; r++) {
        for (let c = 1; c < wave.cols - 1; c++) {
            const idx = r * wave.cols + c;

            wave.current[idx] =
                (wave.previous[idx - 1] +
                wave.previous[idx + 1] +
                wave.previous[idx - wave.cols] +
                wave.previous[idx + wave.cols]) / 2 - wave.current[idx];
            
            wave.current[idx] *= DAMPING;

            const x = c * RESOLUTION;
            const y = r * RESOLUTION;

            const brightness = Math.abs(wave.current[idx]);
            if (brightness > 0.02) { // hanya gambar jika cukup terang
                const hue = (hueOffset + wave.current[idx] * 30) % 360;
                const saturation = 100;
                const lightness = 50 + brightness * 50;

                ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${Math.min(lightness, 100)}%)`;
                ctx.fillRect(x, y, RESOLUTION, RESOLUTION);
            }
        }
    }

    hueOffset = (hueOffset + 1) % 360;

    const temp = wave.previous;
    wave.previous = wave.current;
    wave.current = temp;

    animationFrameId = requestAnimationFrame(animate);
};

        // Initial setup
        initWaveBuffers();
        animationFrameId = requestAnimationFrame(animate);

        // Event listeners
        window.addEventListener('resize', handleResize);
        canvas.addEventListener('mousemove', handleMouseMove);

        // Cleanup function for useEffect
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Dependensi kosong karena semua logika berada di dalam scope ini

    const handleCloseInfoBox = () => {
        setInfoBoxVisible(false);
    };

    return (
        <>
            <canvas
                ref={canvasRef}
                className="block absolute top-0 left-0 w-screen h-screen z-0 bg-white" // Latar belakang putih
                style={{ fontFamily: 'Inter, sans-serif' }}
            />

            {infoBoxVisible && (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-70 text-white p-5 rounded-lg text-center text-lg z-10 border border-gray-700 shadow-lg shadow-cyan-500/50">
                    <p className="mb-2">Selamat datang di tampilan fluida interaktif!</p>
                    <p className="mb-4">Gerakkan mouse Anda di atas layar untuk menciptakan riak berwarna-warni yang halus.</p>
                    <button
                        onClick={handleCloseInfoBox}
                        className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-md text-base transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                    >
                        Oke, Mengerti!
                    </button>
                </div>
            )}
        </>
    );
};

export default FluidCanvas;
