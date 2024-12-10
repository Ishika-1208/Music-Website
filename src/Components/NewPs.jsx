import '../Styles/NewPs.css';
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewPs = () => {
  const { token } = useParams();  // Extract token from URL (e.g., "/reset-password/:token")
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  // Use the token to check the validity when the component mounts
  useEffect(() => {
    if (!token) {
      setError('Invalid or missing reset token.');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(''); // Clear previous messages
    setError(''); // Clear previous errors

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://task-4-0pfy.onrender.com/requestPasswordReset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Successfully reset password
        setMessage('Password successfully reset.');
        setTimeout(() => {
          history.push('/login');
        }, 2000);
      } else {
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}> 
        <h2>Create new password</h2>
        <h5 className='heading'>Your new password must be unique</h5>
        <h5 className='heading2'>from those previously used</h5>
        
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder='New Password' 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <input 
            type="password" 
            className="form-control" 
            placeholder='Confirm New Password' 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        
        <button type='submit' className="btn-primary" disabled={loading}> 
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>

        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default NewPs;
