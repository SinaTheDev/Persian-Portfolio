module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        container: {
            center: true,
        },
        borderWidth: {
            '10': '16px',

        },
        extend: {
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            colors: {
                primary: {
                    50: '#007BED',
                    100: '#434344',
                    150:'#A7A7A8',
                    300:'#282828',
                    500:'#333',
                },
                secondry: {
                    50: '#212122',
                    100:'#d5d5d5',
                    150:'#272728',
                    300:'#323233',
                    500:'#242425'
                },
                header: {
                    50: '#222',
                    100: '#f5f5f5',
                }

            },
            boxShadow: {
                headerShadow: '0 0 10px 0 rgb(0 0 0 / 8%);',
            },
            plugins: [],
        }
    }
}